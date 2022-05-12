import { Spinner } from 'react-bootstrap'

export default function loader() {
  return (
    <Spinner
        animation = 'border'
        role = 'status'
        style = {{
            height: '100px',
            width: '100px',
            margin: 'auto',
            display: 'block',
            color: 'grey'
        }}
    >
        {/* <span className='sr-only'>Loading...</span> */}
    </Spinner>
  )
}
