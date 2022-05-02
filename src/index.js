console.log("%c HI", "color: firebrick");

const init = () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then((data) => {
      const dogImages = data.message;
      const dogsImageContainer = document.getElementById("dog-image-container");
      dogsImageContainer.innerHTML = "";
      dogImages.forEach((imageUrl) => {
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", imageUrl);
        dogsImageContainer.appendChild(imageElement);
      });
    });

  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {
      console.log(Object.keys(data.message));
      const dogBreeds = Object.keys(data.message);
      //to do: display these breeds inside of ul
      //need to add click handle on a particular breed
      const dropdown = document.getElementById("breed-dropdown");
      const breedsContainer = document.getElementById("dog-breeds");

      dogBreeds.forEach((breed) => {
        const liElement = document.createElement("li");
        liElement.innerHTML = breed;
        liElement.addEventListener("click", () => {
          liElement.style.color = "red";
        });

        breedsContainer.appendChild(liElement);
      });

      dropdown.addEventListener("change", (event) => {
        console.log(event.target.value);

        breedsContainer.innerHTML = "";
        dogBreeds
          .filter((breed) => breed.startsWith(event.target.value))
          .forEach((breed) => {
            const liElement = document.createElement("li");
            liElement.innerHTML = breed;
            liElement.addEventListener("click", () => {
              liElement.style.color = "red";
            });
            breedsContainer.appendChild(liElement);
          });
      });
    });
};
document.addEventListener("DOMContentLoaded", init);
