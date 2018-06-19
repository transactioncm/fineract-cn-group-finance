/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import * as denominations from './denomination.actions';
import {DenominationPayload} from './denomination.actions';
import {TellerDenomination} from '/home/pembe/Desktop/fineract-cn-web-app/src/app/sevices/teller/domain/teller-denomination.model';

export interface State {
  entities: TellerDenomination[];
}

export const initialState: State = {
  entities: [],
};

export function reducer(state = initialState, action: denominations.Actions): State {

  switch (action.type) {

    case denominations.LOAD_DENOMINATION: {
      return initialState;
    }

    case denominations.LOAD_DENOMINATION_SUCCESS: {
      const denominations: TellerDenomination[] = action.payload;

      return {
        entities: denominations,
      };
    }

    case denominations.CREATE_DENOMINATION_SUCCESS: {
      const payload: DenominationPayload = action.payload;

      return {
        entities: state.entities.concat(payload.denomination),
      };
    }

    default: {
      return state;
    }
  }
}

export const getDenominationEntities = (state: State) => state.entities;
