import type { Middleware } from '@reduxjs/toolkit'
import { isRejectedWithValue } from '@reduxjs/toolkit'

/**
 * Log a warning and show a toast!
 */
export const queryErrorLogger: Middleware =
	() =>
	// api: MiddlewareAPI
	(next) =>
	(action) => {
		// RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
		if (isRejectedWithValue(action)) {
			alert(action.error.message)
		}

		return next(action)
	}
