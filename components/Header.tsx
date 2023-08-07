import Image from 'next/image'
import Link from 'next/link'
import { SearchField } from '@/components/SearchField'
import { getApp } from '@/lib/newt'
import styles from '@/styles/Header.module.css'

export async function Header() {
  const app = await getApp()

  return (
    <header className={styles.Header}>
      <div className={styles.Header_Inner}>
        <Link className={styles.Title} href="/">
          {app.icon?.type === 'emoji' && (
            <span className={styles.Title_Icon}>{app.icon.value}</span>
          )}
          {app.icon?.type === 'image' && (
            <span className={styles.Title_Icon}>
              <Image src={app.icon.value} alt="" width="32" height="32" />
            </span>
          )}
          <div className={styles.Title_Text}>{app.name || app.uid || ''}</div>
        </Link>
        <div className={styles.Link}>
          <a
            href="https://github.com/Newt-Inc/newt-blog2-starter-nextjs"
            rel="noreferrer noopener"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <SearchField />
      </div>
    </header>
  )
}
