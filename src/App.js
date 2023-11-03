import "./App.css";
import { ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="27894a81-babb-4966-8ca1-dd83cacf0f2d"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
