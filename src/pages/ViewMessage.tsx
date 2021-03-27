import { useState } from 'react';
import { Message, getMessage, getMessages } from '../data/messages';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';
import axois from 'axios';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function ViewMessage() {
  const [message, setMessage] = useState<Message>();
  const [messages, setMessages] = useState<Message[]>([]);
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    axois.get<Message[]>('https://adonis-webapp.herokuapp.com/episodes_api')
    .then(response =>{
      let resp = response.data;
      setMessages(resp);
    })
    .catch(err =>{
      setMessages([]);
    });
    const msgs = getMessages();
    setMessages(msgs);
    const msg = getMessage(parseInt(params.id, 10));
    setMessage(msg);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
          
        </IonToolbar>
      </IonHeader>
    {messages.map(item => { 
        if(item.id == parseInt(params.id)){
            return <IonContent fullscreen>
            <div className="player">
                <div className="head">
                  <div className="back"></div>
                  <div className="front">
                    <div className="avatar"><img src={item.images} style={{objectFit: 'cover'}}/></div>
                    <div className="infos">
                      <div className="titulo_song">{item.title}</div>
                      <div className="duracao_song"><i className="fa fa-clock-o">
                            Total time 45:12</i></div>
                      <div className="tags"><span>Educativo</span><span>Galinhas</span><span>Podcast</span></div>
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  {/* <div className="soundline">

                  </div> */}
                  <div className="controllers active">
                    {/* <div className="back"> </div>
                    <div className="play"></div>
                    <div className="forward"></div> */}
                    <AudioPlayer
    autoPlay
    src={item.path_audio}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
                  </div>
                </div>
                </div>
              <div className="rotation"></div>
      </IonContent>
        }
    })}
      
    </IonPage>
  );
}

export default ViewMessage;
