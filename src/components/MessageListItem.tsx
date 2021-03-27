import {
  IonItem,
  IonLabel,
  IonNote,
  IonIcon
  } from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {message.title}
          
        </h2>
        <span className="date">
            <img src={message.images} className="podcast_img"/>
          </span>
        <p style={{paddingLeft: "40px", width: "50%"}}>
        {message.descriptions}
        </p>
        <div className="parent_icon_play">
          <img src={'/assets/icon/play-button.png'} className="icon_play"/>
        </div>
      </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;
