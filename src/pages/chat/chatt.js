import React, { Component, useEffect, useState } from "react";
import { applyMiddleware } from "redux";

import { StreamChat } from "stream-chat";

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

const apiKey = process.env.REACT_APP_STREAM_API_KEY;

export default function Chatt() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const user = {
    id: userInfo.id.toString(),
    name: userInfo.first_name,
    image: "https://getstream.imgix.net/images/random_svg/FS.png",
  };

  const filters = { type: "messaging", members: { $in: [user.id] } };
  const sort = { last_message_at: -1 };

  const [client, setClient] = useState(null);
  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);

      await chatClient.connectUser(user, chatClient.devToken(user.id));

      // const channel = chatClient.channel("messaging", "talk", {
      //   image: "https://www.drupal.org/files/project-images/react.png",
      //   name: "React app development",
      //   members: [user.id, "33"],
      // });

      // await channel.watch();

      setClient(chatClient);
    }

    init();

    if (client) return () => client.disconnectUser();
  }, []);
  console.log(userInfo);

  if (!client) return <LoadingIndicator />;

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
