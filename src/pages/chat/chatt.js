import React, { Component, useEffect, useState } from "react";
import { applyMiddleware } from "redux";

import { StreamChat } from "stream-chat";
import { useLocation } from "react-router-dom";
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  LoadingIndicator,
  ChannelList,
} from "stream-chat-react";

import "stream-chat-react/dist/css/index.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";

const apiKey = process.env.REACT_APP_STREAM_API_KEY;

export default function Chatt() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const location = useLocation();
  const user = {
    id: userInfo.id.toString(),
    name: userInfo.first_name,
    image: "https://getstream.imgix.net/images/random_svg/FS.png",
  };

  const filters = { type: "messaging", members: { $in: [user.id] } };
  const sort = { last_message_at: -1 };

  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  useEffect(() => {
    async function init() {
      const state = location.state;
      console.log(state);
      const chatClient = StreamChat.getInstance(apiKey);

      await chatClient.connectUser(user, chatClient.devToken(user.id));

      // console.log(user.name + state.freelancer + state.proposalId.toString());
      if (state) {
        const channel = chatClient.channel(
          "messaging",
          user.name + state.freelancer + state.proposalId.toString(),
          {
            image: "https://www.drupal.org/files/project-images/react.png",
            name:
              user.name +
              " - " +
              state.freelancer +
              state.proposalId.toString(),
            members: [user.id.toString(), state.freelancerId.toString()],
          }
        );
        setChannel(channel);

        await channel.watch();
        await channel.sendMessage({ text: "Congratulations, You are Hired!" });
      }

      setClient(chatClient);
      console.log(channel);
    }

    init();

    if (client) return () => client.disconnectUser();
  }, []);
  console.log(userInfo);

  if (!client) return <Loader />;

  return (
    <Chat client={client} theme="messaging light">
      <ChannelList filters={filters} sort={sort} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}
