import React from "react";
import { WeatherstoreServiceConsumer} from "../weatherstore-service-context";

const withWeatherstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <WeatherstoreServiceConsumer>
                {
                    (weatherstoreService) => {
                        return (<Wrapped {...props} weatherstoreService={weatherstoreService} />)
                    }
                }
            </WeatherstoreServiceConsumer>
        );
    }
};

export default withWeatherstoreService;