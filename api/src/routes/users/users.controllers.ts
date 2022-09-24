import { Catch } from '../../core'
import { User } from '../../models'

export const getMyData = Catch(async (rq, rs) => {
  const id = rq.user.id
  const me = await User.getMyData(id)
  return rs.status(200).json(me)
})
