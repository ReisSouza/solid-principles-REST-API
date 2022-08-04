import bcript from 'bcrypt';

const salt = bcript.genSaltSync(10);

interface IBcript {
  value: string;
}
export const bcriptCreateHash = ({ value }:IBcript) => {
  const hashPassword = bcript.hashSync(value, salt);
  return hashPassword;
};
