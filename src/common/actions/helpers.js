/**
 *
 */
export const APPLY = 'common/helpers/APPLY';
export const REVERT = 'common/helpers/REVERT';
export const REVERT_ALL = 'common/helpers/REVERT_ALL';
export const SET_HELPERS = 'common/helpers/SET_HELPERS';



/**
 *
 */
export const applyHelpers = (id, helpers) => ({
	type: APPLY,
	payload: {
		id,
		helpers
	}
});

/**
 *
 */
export const revertHelpers = (id, helpers) => ({
	type: REVERT,
	payload: {
		id,
		helpers
	}
});

/**
 *
 */
export const setHelpers = (data) => ({
	type: SET_HELPERS,
	payload: {
		data
	}
});

/**
 *
 */
export const revertAllHelpers = () => ({
	type: REVERT_ALL,
	payload: {}
});
