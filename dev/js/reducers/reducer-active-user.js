export default function (state = null, action) {
    console.log('Active user reducer called');
    switch (action.type) {
        case 'USER SELECTED':
            return action.payload;
        default:
            return state;
    }
}