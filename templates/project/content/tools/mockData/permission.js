'use strict';

const _ = require('lodash');

const roles = [
  {
    name: 'consumer',
    privileges: [
      {
        name: 'logout'
      },
      {
        name: 'login'
      },
      {
        name: 'register'
      },
      {
        name: 'getUserStatus'
      },
      {
        name: 'requestVercode'
      },
      {
        name: 'getBasicSettingStatus'
      },
      {
        name: 'finishBasicSetting'
      },
      {
        name: 'getRecommendStoreStatus'
      },
      {
        name: 'recommendStore'
      },
      {
        name: 'ignoresRecommendStores'
      },
      {
        name: 'focusStore'
      },
      {
        name: 'focusAllStore'
      },
      {
        name: 'ignoreFocusStore'
      },
      {
        name: 'listNotReadDiscouts'
      },
      {
        name: 'listReadDiscouts'
      },
      {
        name: 'listCollectedDiscouts'
      },
      {
        name: 'ignoreDiscouts'
      },
      {
        name: 'watchDiscounts'
      },
      {
        name: 'receiveCard'
      },
      {
        name: 'collectDiscounts'
      },
      {
        name: 'focusedStore'
      },
      {
        name: 'getTakenCards'
      },
      {
        name: 'getUsedCards'
      },
      {
        name: 'useCard'
      },
      {
        name: 'withdrawal'
      },
      {
        name: 'getWithdrawalRecords'
      },
      {
        name: 'getCustomerInformation'
      },
      {
        name: 'changeCustomerInformation'
      },
      {
        name: 'switchRoles'
      },
      {
        name: 'inviteFriends'
      },
      {
        name: 'managerHome'
      },
      {
        name: 'partnerPlan'
      },
      {
        name: 'getPartnerPlan'
      },
      {
        name: 'getDiscountsDetail'
      },
      {
        name: 'getShopDetails'
      }
    ]
  },
  {
    name: 'manager',
    privileges: [
      {
        name: 'logout'
      },
      {
        name: 'getUserStatus'
      },
      {
        name: 'register'
      },
      {
        name: 'requestVercode'
      },
      {
        name: 'managerGetDiscountsDetail'
      },
      {
        name: 'submitCheck'
      },
      {
        name: 'watchTestInformation'
      },
      {
        name: 'storeInforamtion'
      },
      {
        name: 'managerRecharge'
      },
      {
        name: 'getshopDetails'
      },
      {
        name: 'createUserProfile'
      },
      {
        name: 'createStoreSpecial'
      },
      {
        name: 'changeStoreInformation'
      },
      {
        name: 'getManager'
      },
      {
        name: 'changeManager'
      },
      {
        name: 'selectFans'
      },
      {
        name: 'pushDiscountsManage'
      },
      {
        name: 'getAllPosts'
      },
      {
        name: 'getPushManage'
      },
      {
        name: 'getPushingDiscounts'
      },
      {
        name: 'getUnpushDiscounts'
      },
      {
        name: 'listStoreDiscouts'
      },
      {
        name: 'createDiscount'
      },
      {
        name: 'pushManage'
      },
      {
        name: 'changeDiscountsStatus'
      },
      {
        name: 'getPushingCards'
      },
      {
        name: 'getStopedCards'
      },
      {
        name: 'getTakenInformation'
      },
      {
        name: 'changeCardsStatus'
      },
      {
        name: 'getAllTemplates'
      },
      {
        name: 'createStandardPoster'
      },
      {
        name: 'createUserDefinedPoster'
      },
      {
        name: 'updateStandardPoster'
      },
      {
        name: 'updateUserDefinedPoster'
      },
      {
        name: 'previewStandardPoster '
      },
      {
        name: 'previewUserDefinedPoster'
      },
      {
        name: 'addStore'
      },
      {
        name: 'manageTool'
      }
    ]
  }
];

function getRoles() {
  return roles.map(role => {
    return role.name;
  });
}

function getPrivileges() {
  const rawPrivileges = roles.reduce((acc, cur) => {
    return acc.concat(cur.privileges);
  }, []);


  return _.uniqBy(rawPrivileges, 'name');
}

module.exports = {
  roles,
  getRoles,
  getPrivileges
};
