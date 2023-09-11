import { Button } from '@mui/material'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginButton = () => {
	const navigate = useNavigate()

	const navigateToLoginPage = useCallback(() => navigate('/login'), [navigate])
	return <Button onClick={navigateToLoginPage}>Login</Button>
}
