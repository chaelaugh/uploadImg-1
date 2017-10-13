const tabBarList = []

export function addTabBar(...tabBar){
  tabBarList.push(...tabBar);
}

export function getTabBarList(){
  return tabBarList;
}
