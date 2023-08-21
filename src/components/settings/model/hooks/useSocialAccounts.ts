import { useProfileSettings } from './useProfileSettings.ts'

export const useSocialAccounts = () => {
	return useProfileSettings().socialAccounts
}
