// Get the input fields for the number of ratings for each star
const oneStarInput = document.getElementById("one-star");
const twoStarInput = document.getElementById("two-star");
const threeStarInput = document.getElementById("three-star");
const fourStarInput = document.getElementById("four-star");
const fiveStarInput = document.getElementById("five-star");

// Get the element to display the average rating
const averageRating = document.getElementById("average-rating");

// Get the input field for the desired average review and the element to display the result
const desiredAverageInput = document.getElementById("desired-average");
const result = document.getElementById("result");

// Add an event listener to update the average rating whenever all 5 fields are filled
const updateAverageRating = () => {
  const oneStar = parseFloat(oneStarInput.value) || 0;
  const twoStar = parseFloat(twoStarInput.value) || 0;
  const threeStar = parseFloat(threeStarInput.value) || 0;
  const fourStar = parseFloat(fourStarInput.value) || 0;
  const fiveStar = parseFloat(fiveStarInput.value) || 0;

  const totalRatings = oneStar + twoStar + threeStar + fourStar + fiveStar;
  const weightedAverage = (1 * oneStar + 2 * twoStar + 3 * threeStar + 4 * fourStar + 5 * fiveStar) / totalRatings;

  // Display the average rating
  averageRating.textContent = weightedAverage.toFixed(1);
};

// Add an event listener to listen for changes in the input fields
oneStarInput?.addEventListener("change", updateAverageRating);
twoStarInput?.addEventListener("change", updateAverageRating);
threeStarInput?.addEventListener("change", updateAverageRating);
fourStarInput?.addEventListener("change", updateAverageRating);
fiveStarInput?.addEventListener("change", updateAverageRating);

// Add an event listener to calculate the number of 5-star ratings needed to achieve the desired average review
const calculate = () => {
  const desiredAverage = parseFloat(desiredAverageInput.value);

  if (desiredAverage >= 1 && desiredAverage <= 5) {
    const oneStar = parseFloat(oneStarInput.value) || 0;
    const twoStar = parseFloat(twoStarInput.value) || 0;
    const threeStar = parseFloat(threeStarInput.value) || 0;
    const fourStar = parseFloat(fourStarInput.value) || 0;
    const fiveStar = parseFloat(fiveStarInput.value) || 0;

    const totalRatings = oneStar + twoStar + threeStar + fourStar + fiveStar;
    const sumFour =  1 * oneStar + 2 * twoStar + 3 * threeStar + 4 * fourStar; 
    const currentAverage = (1 * oneStar + 2 * twoStar + 3 * threeStar + 4 * fourStar + 5 * fiveStar) / totalRatings;
    const neededFiveStar = Math.ceil((desiredAverage * (totalRatings + 1) - currentAverage * totalRatings) / 4);
    
    const neededStar = Math.ceil((sumFour*(desiredAverage-1)/(desiredAverage-5)));
    const finalAns = Math.abs(neededStar) - fiveStar;
    // Display the result
    result.textContent = finalAns;
  } else {
    // Display an error message if the desired average review is invalid
    result.textContent = "Invalid desired average review. Please enter a value between 1 and 5. / કાંઈક માપમાં હોઈ  🤔 ";
  }
};

// Add an event listener to listen for clicks on the Calculate button
const calculateButton = document.querySelector("button");
calculateButton?.addEventListener("click", calculate);
