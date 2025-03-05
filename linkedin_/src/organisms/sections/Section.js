import React, { useEffect, useState } from "react";
import HeaderCard from "../../molecules/headerCard/index";
import CardContent from "../../molecules/cardContent/index";
import Modal from "../../molecules/modal/index";
import Button from "../../atoms/buttton/index";
import ProfileContent from "../../molecules/profileContent/index";
import AnalyticsSection from "../../molecules/analystSection/index";
import { useModal } from "../../hooks/useModal";
import './Section.css'
import Interests from "../../molecules/interests/index";

function Section({ title, type, info, handlesubmit, handleedit, edititem, handledelete }) {
    const [expand, setExpand] = useState(false);
    const extraClass = expand ? "card-expand" : "";

    function toggleClick() {
        setExpand((prev) => !prev);
    }
    const { open, onAdd, onClose, editHandler } = useModal(handleedit);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'unset';
    }, [open]);

    let content;

    switch (type) {
        case 'interests':
            content=(
                <>
                <section className={`${type}-card`} >
                    <HeaderCard  title={title}  />
                <Interests></Interests>
                </section>
                </>
            )

            break;
        case 'analytics':
            content = (
                <div className="analytics">
                    <AnalyticsSection
                        info={info}
                    >
                    </AnalyticsSection>
                </div>
            )

            break;

        case 'profile':
            content = (
                < ProfileContent
                    info={info}
                    onEdit={() => editHandler(info)}
                >
                </ProfileContent>

            )

            break;
        default:

            content = (
                <>
                    <section className={`card ${extraClass} ${type}-card`}>
                        <HeaderCard classname='fa-solid fa-add' title={title} handleclick={onAdd} />
                        < div
                            id={title}
                            className={`${type}-detail card-content`}
                        >
                            {info ? (
                                info.map((item) => (
                                    <CardContent key={item.id} type={type} data={item} onEdit={() => editHandler(item)} />
                                ))
                            ) : (
                                <CardContent type={type} />
                            )}
                        </div>

                    </section>
                    <Button classname='toggle-btn' handleclick={toggleClick}>
                        {expand ? "Show Less" : "Show More"}
                    </Button>
                </>
            );
    }
    return (
        <>

            {content}
            {open && (
                <Modal
                    Onclose={onClose}
                    editingItem={edititem}
                    handlesubmit={handlesubmit}
                    handledelete={handledelete}
                    type={type}
                    isopen={open}
                >
                </Modal>
            )}

        </>
    );
}

export default Section;
