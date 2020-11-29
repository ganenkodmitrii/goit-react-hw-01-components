import s from "./TransactionHistory.module.css";
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
    return (
        <table className={s.transaction}>
            <thead className={s.thead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={s.tbody} >{items.map(item=>(
                <tr className={s.list} key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
  
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({   
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    )
};
export default TransactionHistory;