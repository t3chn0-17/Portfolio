import styles from './Profile.module.css'

export default function Profile({
  children,
  variant = "blue"
})
{
  return (
    <div className={`${styles.Profile} ${styles[variant]}`}>
      {children}
    </div>
  )
}