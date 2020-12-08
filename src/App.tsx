import React from 'react';
import './App.css';
import {ClientCommunicationAPI} from "@walkme/client-shell-sdk";
const clientCommunicationAPI = new ClientCommunicationAPI('teachMe');


function App() {
  const div = document.getElementById('myDiv');
  clientCommunicationAPI.onSystemChanged((system: any) => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve('ok to change system');
      },  1000);
    });

  });

  clientCommunicationAPI.onEnvironmentChanged((env: any) => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve('ok to change env');
      },  1000);
    });

  });


  const save = async () => {
    try {
      const saveResponse = await clientCommunicationAPI.save({data: 'saving teach Me Flow'});
      console.log('(in iframe resolve)', saveResponse);
    } catch (err) {
      console.log('(in iframe reject)', err);
    }
  }

  const getEnvironments = async () => {
    try {
      const envs = await clientCommunicationAPI.getEnvironments();
      console.log('(in iframe resolve)', envs);
    } catch (err) {
      console.log('(in iframe reject)', err);
    }
  }

  const getSystems = async () => {
    try {
      const sys = await clientCommunicationAPI.getSystems();
      console.log('(in iframe resolve)', sys);
    } catch (err) {
      console.log('(in iframe reject)', err);
    }
  }

 const getEnvironmentData = async () => {
    try {
      const envData = await clientCommunicationAPI.getEnvironmentData();
      console.log('(in iframe resolve)', envData);
    } catch (err) {
      console.log('(in iframe reject)', err);
    }
  }

  const getSystemData = async () => {
    try {
      const envData = await clientCommunicationAPI.getEnvironmentData();
      console.log('(in iframe resolve)', envData);
    } catch (err) {
      console.log('(in iframe reject)', err);
    }
  }

  const buttonStyle = {
    width: '200px',
    height: '30px',
    margin: '10px'
  };

  return (
    <div className='parent'>
      <button onClick={save} style={buttonStyle}> Save </button>
      <button onClick={getEnvironments} style={buttonStyle}> getEnvironments </button>
      <button onClick={getSystems} style={buttonStyle}> getSystems </button>
      <button onClick={getEnvironmentData} style={buttonStyle}> getEnvironmentData </button>
      <button onClick={getSystemData} style={buttonStyle}> getSystemData </button>
    </div>
  );
}

export default App;
