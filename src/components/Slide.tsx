import ButtonIcon from "./organismos/ButttonIcon";
import Option from "./organismos/Option";
export default function Slide() {
    const options: Array<string> = [
        "DJI Air 2S",
        "DJI Mini 2",
        "DJI Mavic 3",
        "DJI Osmo Mobile 3",
        "DJI Ronin-S",
        "DJI FPV Drone",
        "DJI Pocket 2",
        "DJI Matrice 300 RTK"
    ];
    return (
        <div>

        <div className='w-full rounded-2xl shadow-sm border-2'>
            <img src="https://www.cliftoncameras.co.uk/uploads/Landing%20Pages/2023/apr-2023/dji-mavic-3-pro-b.jpg" className=" w-full rounded-2xl" alt="" />
            <div className="flex gap-6 -mt-2 max-lg:hidden py-2 items-center justify-center">
                {options.map((option, index) => (
                    <Option key={index} label={option.toUpperCase()} />
                ))}
            </div>
       
        </div>
        <div className=" w-full flex justify-between py-10 px-20">
                <ButtonIcon label="texto Icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#666666" d="M12 17q0-1.125.463-2.075t1.237-1.65L15.85 17zm2.5 4.3q-.925-.525-1.55-1.375T12.1 18h4.325zm1.925-5.3L14.5 12.7q.575-.325 1.2-.513T17 12q.425 0 .813.075t.762.2zM17 22q-.425 0-.812-.075t-.763-.2L17.575 18l1.925 3.3q-.575.325-1.2.513T17 22m.575-6l1.925-3.3q.925.525 1.55 1.375T21.9 16zm2.725 4.725L18.15 17H22q0 1.125-.45 2.075t-1.25 1.65M20.775 10H18.7q-.65-2.2-2.475-3.6T12 5Q9.075 5 7.038 7.037T5 12q0 1.8.813 3.3T8 17.75V15h2v6H4v-2h2.35Q4.8 17.75 3.9 15.938T3 12q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3q3.225 0 5.663 1.988T20.775 10"/></svg>
                <h1>Texto</h1>
                </ButtonIcon>
                <ButtonIcon label="texto Icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V6"/></g></svg>
                <h1>Texto</h1>
                </ButtonIcon>
                <ButtonIcon label="texto Icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><path fill="#666666" d="M27 16.76v-1.53l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1a2 2 0 0 0-.64.1l-2.43.82a11 11 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.5 11.5 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1a2 2 0 0 0 .64-.1l2.43-.82a11 11 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.5 11.5 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1a2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM25.21 24l-3.43-1.16a8.9 8.9 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.4 9.4 0 0 1-2.7-1.57L6.79 24l-2.36-4l2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4l3.43 1.16a8.9 8.9 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.4 9.4 0 0 1 2.7 1.57L25.21 8l2.36 4l-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20Z"/><path fill="#666666" d="M16 22a6 6 0 1 1 6-6a5.94 5.94 0 0 1-6 6m0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4"/></svg>
                <h1>Texto</h1>
                </ButtonIcon>
                <ButtonIcon label="texto Icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14"><path fill="none" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" d="M5.248 12.982a3.184 3.184 0 0 1-3.992-.44l-.449-.438a1.08 1.08 0 0 1 0-1.507L2.713 8.71a1.07 1.07 0 0 1 1.497 0a1.08 1.08 0 0 0 1.507 0L8.71 5.717a1.06 1.06 0 0 0 0-1.507a1.07 1.07 0 0 1 0-1.497L10.607.817a1.08 1.08 0 0 1 1.507 0l.439.45a3.184 3.184 0 0 1 .439 3.99a28.9 28.9 0 0 1-7.744 7.725"/></svg>
                <h1>Texto</h1>
                </ButtonIcon>
                <ButtonIcon label="texto Icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.83 14.254c.298-.323.447-.484.605-.578a1.24 1.24 0 0 1 1.241-.02c.161.09.315.247.622.561s.46.47.548.635c.212.397.205.878-.018 1.268c-.092.162-.25.314-.566.619L17.5 20.362c-.599.577-.898.865-1.273 1.012c-.374.146-.786.135-1.609.113l-.112-.002c-.25-.007-.376-.01-.449-.093c-.072-.083-.062-.21-.043-.465l.011-.14c.056-.718.084-1.077.224-1.4s.383-.585.867-1.11zM22 10.5v-.783c0-1.94 0-2.909-.586-3.512c-.586-.602-1.528-.602-3.414-.602h-2.079c-.917 0-.925-.002-1.75-.415L10.84 3.521c-1.391-.696-2.087-1.044-2.828-1.02S6.6 2.918 5.253 3.704l-1.227.716c-.989.577-1.483.866-1.754 1.346C2 6.246 2 6.83 2 7.999v8.217c0 1.535 0 2.303.342 2.73c.228.285.547.476.9.54c.53.095 1.18-.284 2.478-1.042c.882-.515 1.73-1.05 2.785-.905c.884.122 1.705.68 2.495 1.075M8 2.5v15m7-12v8" color="#666666"/></svg>
                <h1>Texto</h1>
                </ButtonIcon>
                <ButtonIcon label="texto Icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 640 512"><path fill="#666666" d="M0 32C0 14.3 14.3 0 32 0h16c44.2 0 80 35.8 80 80v288c0 8.8 7.2 16 16 16h464c17.7 0 32 14.3 32 32s-14.3 32-32 32h-66.7c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H253.2c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H144c-44.2 0-80-35.8-80-80V80c0-8.8-7.2-16-16-16H32C14.3 64 0 49.7 0 32m432 64V56c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v40zm-144 0V56c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56v264H288zm224 224V96h16c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48zM240 96h16v224h-16c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48"/></svg>
                <h1>Texto</h1>
                </ButtonIcon>
            </div>
        </div>
    )
}
