# To Do Application

This application is frontend to do list.

It was created using:

- React.js
- Tailwind.css

# How this application works

To add a task, simply write it down in input field and click **Add** button or click **Enter**. If you want to clear input, you can click **Escape** when you type in it.

When you add at least one task, the **Clear** button appears. You can click it or click **Delete** key to remove all tasks from the list.

You can check the tasks that you have already done, while the task is checked its style is changed in an elegant way.

Every task has a button located on the right side of the task element. When you click it, the dropdown menu will apear with two options:

1. **Delete task** which deletes current task
2. **Delete selected tasks** which deletes all selected tasks

The main state, which holds all added tasks, is saved on your local storage. As a result you can refresh your page or when the connection got broke, all tasks will be restored.

# How to start the app

> [!IMPORTANT]
> You need to have Node.js installed on your computer.

To run this application, run this command in to-do-app folder:

> npm run dev

The website is running on your localhost: http://localhost:5173/

# When you have any problems with starting the app, check solutions below

In case of any problems with vite that is also crucial part of frontend please update it to the latest version:

> npm install vite@latest --save-dev

If you have aby problem with running this app, please try to update your Node.js to the latest version.
