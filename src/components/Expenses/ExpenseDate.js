import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date-__month">{month}</div>
      <div className="expense-date-__day">{day}</div>
      <div className="expense-date-__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
