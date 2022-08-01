import React from 'react';
import { WebView } from 'react-native-webview';

function Feedback(){
    return <WebView source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSdeFJ7HVfc_qBdzWnPDYcz_1U5dMrMW1dDB_yMPoRKuHjsPiw/viewform?usp=sf_link' }} style={{ flex:1 }} />;     
    }


export default Feedback;