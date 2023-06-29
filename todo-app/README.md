# Project Name
 
To-Do App
 
## Description
 
This project is a To-Do app that allows users to manage their tasks efficiently. It includes features such as listing all to-dos, viewing to-do details, creating new to-dos, deleting to-dos, editing to-dos, archiving to-dos, and toggling between dark and light mode. The app also integrates with a weather API to display the current weather for the user's location and provides a detailed weather forecast for today and the next five days. The UI of the app is built using Material-UI for a clean and responsive design.
 
## Features
 
- List all to-dos: View a list of all the tasks.
- View to-do info dialog: Access detailed information about a specific to-do.
- Create new to-do: Add a new task to the to-do list.
- Delete to-do: Remove a task from the to-do list.
- Edit to-do: Modify the details of a to-do.
- Archive to-do: Move a completed task to the archive.
- Show current weather: Display the current weather for the user's location using a weather API.
- Weather page: Open a page with the weather forecast for today and the next five days, providing hourly details.
- Toggle between dark and light mode: Switch the app's theme between dark and light mode for better user experience.
 
## To-Do Attributes
 
Each to-do item in the app has the following attributes:
 
- Title: The title or name of the task.
- Description: Additional details or notes about the task.
- Checked: Indicates whether the task is completed or not.
- Created At: The date and time when the task was created.
- Finished At: The date and time when the task was completed.
- Archive At: The date and time when the task was archived.
 
## Technologies Used
 
The project utilizes the following technologies:
 
- React: JavaScript library for building user interfaces.
- Redux toolkit: for state management https://redux-toolkit.js.org/
- Material-UI: UI component library for React applications. https://mui.com/
- Weather API: API to fetch weather information for the user's location  https://openweathermap.org/api
- JSON server: fake server to hande request https://www.npmjs.com/package/json-server
 
## Installation
 
To run the project locally, follow these steps:
 
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd to-do-app`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. run Json server: `json-server --watch db.json --port 3004`
6. Open the app in your browser: `http://localhost:3000`

 
## Usage
 
- Create a new to-do by clicking on the "New To-Do" button and filling in the necessary details.
- Edit an existing to-do by selecting the desired to-do and clicking on the "Edit" button.
- Mark a to-do as completed by checking the checkbox next to it.
- Delete a to-do by selecting the desired to-do and clicking on the "Delete" button.
- Archive a completed to-do by selecting the desired to-do and clicking on the "Archive" button.
- Toggle between dark and light mode by clicking on the theme toggle button.
- View the current weather for your location by accessing the "Weather" section.
- Clicking on the weather section will open a page with detailed weather information for today and the next five days.
 
## Contribution
 
Contributions to the project are welcome. If you find any issues or have suggestions for improvements, feel free to submit a pull request or open an issue on the project's GitHub repository.
 
 
## Contact
 
For any inquiries or additional information, please contact [Menna Ayman](mailto:mennaayman94@gmail.com).