import { useProfileSettings } from '@/components/settings/model/hooks/useProfileSettings.ts'

export const useSocialAccounts = () => {
	return useProfileSettings().socialAccounts
}
