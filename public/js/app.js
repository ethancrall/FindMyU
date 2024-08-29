
// document.addEventListener('DOMContentLoaded', () => {
//     const app = document.getElementById('app');

//     // Function to fetch college data from your College Info API (e.g., using Axios)
//     async function fetchColleges() {
//         try {
//             const response = await axios.get('/api/colleges');
//             displayColleges(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     // Function to display colleges on the page
//     function displayColleges(colleges) {
//         colleges.forEach(college => {
//             const div = document.createElement('div');
//             div.className = 'college';
//             div.innerHTML = `
//                 <h2>${college.name}</h2>
//                 <p>${college.location}</p>
//                 <!-- Add more college details here -->
//             `;
//             app.appendChild(div);
//         });
//     }

//     fetchColleges();
// });

function openNav() {
    document.getElementById("sidenavBar").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("sidenavBar").style.width = "0";
}