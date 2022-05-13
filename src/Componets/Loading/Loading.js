import React, { Component } from 'react';

function Loading(Component) {
    return function WithLoadingAnycomponent({isLoading,data}){
        console.log(isLoading,data);
        if(isLoading){
            return(
                <p>Loading.....</p>
            )
        }
        else{
            return(
                <Component data={data}/>
            )
        }
    }
}

export default Loading;