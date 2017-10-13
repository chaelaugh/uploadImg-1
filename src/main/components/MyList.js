import React from 'react'
import defaultImage from '../../assets/avatar.jpg'
import styles from './MyList.css'
const MyList = ({ onCourses, onHobby, onSecret, onBasic, onHistory, onInfo, onMember }) => {
  return(
    <div className={styles.context}>
      <div className={styles.title}>个人中心</div>
      <div className={styles.account}>
        <div className={styles.avatar}><img src={defaultImage}/></div>
        <div className={styles.info}>
          <div className={styles.name}>
            <div className={styles.nameText}>水果君</div>
            <div className={styles.level}><img src={defaultImage}/></div>
            <div onClick={() => onMember()} className={styles.member}>开通会员</div>
          </div>
          <div className={styles.id}>
            <div>ID: 13360041</div>
            <div>身份未认证</div>
          </div>
        </div>
        <div onClick={() => onInfo(1)} className={styles.statusContent}>
          <div className={styles.status}>恋爱中</div>
        </div>
      </div>
      <div className={styles.actionContext}>
        <div className={styles.action}>
          <img src={defaultImage}/>
          <div>读经随笔</div>
        </div>
        <p> | </p>
        <div className={styles.action}>
          <img src={defaultImage}/>
          <div>祷告默想 </div>
        </div>
        <p> | </p>
        <div className={styles.action}>
          <img src={defaultImage}/>
          <div>主日备忘</div>
        </div>
      </div>
      <div className={styles.dynamic}>
      <div  className={styles.trends}>
        <div className={styles.item}>
          <img src={defaultImage}/>
          <div>谁看过我</div>
        </div>
        <div className={styles.actionAccount}>
          <img className={styles.trendsImage} src={defaultImage}/>
          <img className={styles.trendsImage} src={defaultImage}/>
          <img className={styles.trendsImage} src={defaultImage}/>
          <img className={styles.trendsImage} src={defaultImage}/>
          <img className={styles.trendsImage} src={defaultImage}/>
        </div>
        </div>
        <div  className={styles.trends}>
          <div className={styles.item}>
            <img src={defaultImage}/>
            <div>谁喜欢我</div>
          </div>
          <div className={styles.actionAccount}>
            <img className={styles.trendsImage} src={defaultImage}/>
            <img className={styles.trendsImage} src={defaultImage}/>
            <img className={styles.trendsImage} src={defaultImage}/>
            <img className={styles.trendsImage} src={defaultImage}/>
            <img className={styles.trendsImage} src={defaultImage}/>
          </div>
        </div>
      </div>
      <div className={styles.dynamic}>
        <div  className={styles.trends}>
          <div className={styles.item}>
            <img src={defaultImage}/>
            <div>我喜欢谁</div>
          </div>
          <div className={styles.actionAccount}>
            <img className={styles.trendsImage} src={defaultImage}/>
            <img className={styles.trendsImage} src={defaultImage}/>
            <img className={styles.trendsImage} src={defaultImage}/>
            <img className={styles.trendsImage} src={defaultImage}/>
            <img className={styles.trendsImage} src={defaultImage}/>
          </div>
        </div>
        <div  className={styles.trends}>
          <div className={styles.item}>
            <img src={defaultImage}/>
            <div>交往记录</div>
          </div>
          <div className={styles.actionAccount}>
            <img className={styles.trendsImage} src={defaultImage}/>
            <img className={styles.trendsImage} src={defaultImage}/>
            <img className={styles.trendsImage} src={defaultImage}/>
            <img className={styles.trendsImage} src={defaultImage}/>
            <img className={styles.trendsImage} src={defaultImage}/>
          </div>
        </div>
      </div>
      <div className={styles.dynamic}>
        <div onClick={() => onCourses()} className={styles.item}>
          <img src={defaultImage}/>
          <div>信仰历程</div>
        </div>
        <div onClick={() => onHobby()} className={styles.item}>
          <img src={defaultImage}/>
          <div>兴趣爱好</div>
        </div>
      </div>
      <div className={styles.dynamic}>
        <div onClick={() => onSecret()} className={styles.item}>
          <img src={defaultImage}/>
          <div>隐私信息</div>
        </div>
        <div onClick={() => onBasic()} className={styles.item}>
          <img src={defaultImage}/>
          <div>基本信息</div>
        </div>
        <div onClick={() => onHistory()} className={styles.item}>
          <img src={defaultImage}/>
          <div>爱肋简史</div>
        </div>
      </div>
      <div className={styles.dynamic}>
        <div className={styles.item}>
          <img src={defaultImage}/>
          <div>关于</div>
        </div>
      </div>
    </div>
  )
}

export default MyList;
