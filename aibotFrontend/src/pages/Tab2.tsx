import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { IonButton, IonInput, IonItem, IonLabel, IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import './Tab2.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <IonPage>
            <IonContent className="ion-padding login-content">
                <IonCard className="login-card">
                    <IonCardHeader>
                        <IonCardTitle className="login-title">Login</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <form className="login-form">
                            <IonItem className="input-item">
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput 
                                    type="email" 
                                    value={email} 
                                    onIonChange={(e) => setEmail(e.detail.value!)} 
                                    required
                                />
                            </IonItem>
                            <IonItem className="input-item">
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput 
                                    type="password" 
                                    value={password} 
                                    onIonChange={(e) => setPassword(e.detail.value!)} 
                                    required
                                />
                            </IonItem>
                            <IonButton expand="full" type="submit" className="login-button">Login</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
