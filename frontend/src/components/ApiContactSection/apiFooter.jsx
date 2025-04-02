

export default function res({contacts, links}){
    return(
        <div className="footer_section">
            <div className="fix_block">
                <div className="my-10 flex flex-wrap justify-around">
                    <div className="p-5">
                        <div className="">Контакты:</div>
                        {contacts.map((item) => (
                            <div key={item.id}>{item.contact}</div>
                        ))}
                    </div>
                    <div className="p-5 flex ">
                        {links.map((item) =>
                            <div  key={item.id}>
                                <div className="p-2"> <a href={item.url}> <i className={item.icon}></i></a></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}