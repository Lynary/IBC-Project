import { PageHeader } from 'antd';
import Link from 'next/link'
import { useRouter } from 'next/router';
export default function Header(){
    const { pathname } = useRouter();
    const menu = [
        {
            "url":"/",
            "text":"Home"
        },
        {
            "url":"/registration",
            "text":"Registration"
        },
        
        {
            "url":"/dashboard",
            "text":"Chart"
        }
    ]
    return(
        <>
        <PageHeader
    className="site-page-header"
    title="Kelompok 2"
    subTitle="This is a subtitle"
      extra={menu.map(el=>(
        <Link href={el.url}>
            <a className={"text-dark nav-link"+ (pathname==el.url?' active':'')} >
            {el.text}
            </a>
        </Link>
      ))}
  />
        </>
    )
}