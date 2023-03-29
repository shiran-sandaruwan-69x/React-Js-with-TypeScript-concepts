import React from "react";

interface userContextType{

}

const UserContext = React.createContext<any>(null)

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}

export default UserContext