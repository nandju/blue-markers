import React from "react";
import {Alert, Button} from "@nextui-org/react";

export default function AlertNextUI() {
  const [isVisible, setIsVisible] = React.useState(true);

  const title = "Souscription effectuée avec succès";
  const description =
    "Votre souscription a été effectuée avec succès. Nous vous contacterons dès que possible.";

  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-md">
      {isVisible ? (
        <Alert
          color="success"
          description={description}
          isVisible={isVisible}
          title={title}
          variant="faded"
          onClose={() => setIsVisible(false)}
        />
      ) : (
        <Button variant="bordered" onPress={() => setIsVisible(true)}>
          Show Alert
        </Button>
      )}
    </div>
  );
}

