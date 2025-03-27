import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding home-content">
                <div className="home-container">
                    <IonText className="home-title">
                        <h2>Welcome to Bootcamp!</h2>
                    </IonText>
                    <IonText className="home-text">
                        <p>Get ready to enhance your skills with hands-on training.</p>
                    </IonText>
                    <IonButton href='/tab2' expand="full" className="home-button">
                        Get Started
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
  );
};

export default Tab1;
