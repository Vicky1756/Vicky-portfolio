import React from "react";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    const topButton = document.getElementById("topButton");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.visibility = "visible";
    } else {
      topButton.style.visibility = "hidden";
    }
  }

  React.useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
    window.onload = function () {
      scrollFunction();
    }; // To make sure that this button is not visible at starting.
  }, []);

  // When the user clicks on the button, scroll to the top of the document
  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}
