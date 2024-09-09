const fingers = ["finger0", "finger1", "finger2", "finger3", "finger4"];

const replaceImageInRandom = (handId) => {
  const hand = document.getElementById(handId);
  let images = ['url("images/hand-base.png")'];

  fingers.forEach((finger) => {
    const state = Math.random() < 0.5 ? "open" : "close";
    images.unshift(`url("images/${finger}-${state}.png")`);
  });

  hand.style.backgroundImage = images.join(", ");
};

document.getElementById("playGameButton").addEventListener("click", () => {
  replaceImageInRandom("leftHand");
  replaceImageInRandom("rightHand");
});
