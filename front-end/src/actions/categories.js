import {
    getAllCategories,
} from '../utils/api'

const GET_CATEGORIES = 'GET_CATEGORIES'

export const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
})

export const fetchCategories = () => dispatch => (
    getAllCategories()
        .then(categories => dispatch(getCategories(categories)))
)