import { getAnalytics } from 'firebase/analytics'

import {
  getDatabase,
  ref,
  set,
  get,
  child,
  onValue,
  remove,
  query,
  orderByChild,
  orderByValue,
  endAt,
  startAt,
  equalTo,
  orderByKey,
} from 'firebase/database'

import { app } from './api'
import { filter, isArray, size, split } from 'lodash'
import { setClientsSearch, setClients } from '../redux/clients/slice'
import {
  setBasicPlan,
  setCalculatePlan,
  setDividePlan,
  setGlobalPlan,
  setPlan,
  setPlanPrice,
  setPlanRate,
  setProfilePlan,
  setVizas,
} from '../redux/plan/slice'
import { deepRows } from '../utils/deepRows'
import { CompassOutlined } from '@ant-design/icons'
import { setNotification } from '../redux/messages/slice'
import { setRows, setStruct, setTable } from '../redux/creators/slice'

const analytics = getAnalytics(app)
const db = getDatabase(app)
