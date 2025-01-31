# Simple To-Do List CLI Application
# This program allows users to add, view, remove, and complete tasks.
# Tasks are stored in a file so they persist between runs.

def display_tasks():
    """Reads and displays all tasks from the file."""
    try:
        with open("tasks.txt", "r") as file:
            tasks = file.readlines()
            if not tasks:
                print("No tasks available.")
            else:
                print("\nYour To-Do List:")
                for index, task in enumerate(tasks, start=1):
                    print(f"{index}. {task.strip()}")
    except FileNotFoundError:
        print("No tasks found. Start by adding a task.")


def add_task(task):
    """Appends a new task to the file."""
    with open("tasks.txt", "a") as file:
        file.write(task + "\n")
    print(f'Task "{task}" added successfully!')


def remove_task(task_number):
    """Removes a task by its number in the list."""
    try:
        with open("tasks.txt", "r") as file:
            tasks = file.readlines()
        if 1 <= task_number <= len(tasks):
            removed_task = tasks.pop(task_number - 1)
            with open("tasks.txt", "w") as file:
                file.writelines(tasks)
            print(f'Task "{removed_task.strip()}" removed successfully!')
        else:
            print("Invalid task number.")
    except FileNotFoundError:
        print("No tasks found to remove.")


def main():
    """Main function to run the To-Do List program."""
    while True:
        print("\nTo-Do List Menu:")
        print("1. View Tasks")
        print("2. Add Task")
        print("3. Remove Task")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            display_tasks()
        elif choice == "2":
            task = input("Enter a new task: ")
            add_task(task)
        elif choice == "3":
            try:
                task_number = int(input("Enter the task number to remove: "))
                remove_task(task_number)
            except ValueError:
                print("Please enter a valid number.")
        elif choice == "4":
            print("Exiting the To-Do List application. Goodbye!")
            break
        else:
            print("Invalid choice. Please select a valid option.")


if __name__ == "__main__":
    main()