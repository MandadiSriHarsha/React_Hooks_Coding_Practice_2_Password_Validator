import {useState} from 'react'

import {
  MainContainer,
  InputCard,
  CardHeading,
  CardDescription,
  Input,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => setPassword(event.target.value)

  return (
    <MainContainer>
      <InputCard>
        <CardHeading>Password Validator</CardHeading>
        <CardDescription>
          Check how strong and secure is your password
        </CardDescription>
        <Input type="password" value={password} onChange={onChangePassword} />
        {password.length < 8 && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </InputCard>
    </MainContainer>
  )
}

export default PasswordValidator
