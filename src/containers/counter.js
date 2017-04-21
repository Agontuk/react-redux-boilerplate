import { connect } from 'react-redux';
import Counter from '../components/counter';
import { increment } from '../actions/ActionCreators';

const mapStateToProps = (state) => ({
    count: state.counter.count
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => {
        dispatch(increment());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
