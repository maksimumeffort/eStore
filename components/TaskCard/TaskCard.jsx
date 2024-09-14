import styles from "./TaskCard.module.scss";

const TaskCard = ({ task, myTasksArr, setMyTasks }) => {
  const handleEvent = () => {
    const newArray = [...myTasksArr];
    newArray.push(task);
    // const filteredTasks = tasksArr.filter((t) => t.task === task.task);
    setMyTasks(newArray);
  };
  console.log(myTasksArr);

  return (
    <div className={styles.TaskCard}>
      <h3>{task.task}</h3>
      <p>{task.priority}</p>
      <button onClick={handleEvent}>add</button>
    </div>
  );
};

export default TaskCard;
