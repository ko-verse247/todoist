
# Todoist Code Test

## Goal

Implement a simple Todoist clone web application.

- You don’t have to implement an user authentication. Any user sees the same data the other users have added. But it must have to be written to and read from a remote database.

#### Features
- Users should be able to add a new task by clicking “+ 작업 추가” button;
    - Clicking discloses hidden input field and submit button (red 작업 추가 button), and a cancel button to undisclose it back.
- Users should be able to delete the task they have added;
    - The trash button on the right side of the list should be initially hidden;
    - Hovering the cursor over the list item makes the trash button visible.
- Users should be able to mark their tasks as ‘completed’ by clicking in the circle on the left side;
    - A toast message saying “1 작업을 완료했습니다” pops up;
    - A toast message should automatically dismiss after 2 seconds.
- Please refer to the real Todoist web app for a working demo.

## Requirements
#### Required Stacks
- Back-end - REST API Server
    - Node.js;
    - Express;
    - Mongo DB;
    - Mongoose.
- Front-end
    - Vue.js;
    - Less;
    - PUG.

#### UI
Implement a responsive web UI following the specifications below:

- The header (navigation bar) must fill the vertical width of the window in any case and should be fixed on the top of the window when it scrolls;
- If the window resizes, the list width must resize as well maintaining the side paddings between the container;
    - The list should not get larger than 800px in width and it must remain centered horizontally.
- Text of the UI components must be written in Korean;
- Run the application in a remote server (Using any service you like, e.g. AWS EC2, Lightsail, etc.) and make it accessible remotely via public IP address or DNS. It doesn’t have to be running on 80 port.
## Design

- The application design is available on Figma;
- The assets such as icons are sliced for you to download;
- If the layout seems vague or ambiguous, please implement it how you think it should be;
- Please try as hard as you can to make it same with the design.

[![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/n6LXClxE72a4EA4qwAyM5G/%ED%88%AC%EB%91%90%EC%9D%B4%EC%8A%A4%ED%8A%B8-%EB%AA%A9%EC%97%85?node-id=0%3A1&t=QT4gKwrOZmpFVDy6-1)
## Additional Information

- Fork this repository adding your name to the repository name (e.g. todoist-priscila);
- Commit your code there and then open a Pull Request to the original repository;
- Feel free to add any stack and/or feature you might think would be important;
- The time limit is 5 days.

### 수고하세요!
