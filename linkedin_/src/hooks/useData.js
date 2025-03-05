import { useState } from "react";
import UserData from "../organisms/UserData";

export function useUserData() {
    const [item, setEditingItem] = useState(null);
    const [userData, setUserData] = useState(UserData);

    const sections = [
        { title: "Profile", type: "profile", data: userData.profile},
        { title: "Experience", type: "experience", data: userData.experience},
        { title: "Education", type: "education", data: userData.education},
        { title: "Skills", type: "skills", data: userData.skills},
        { title: "Analytics", type: "analytics", data: userData.analytics},
        { title: "Interests", type: "interests", data: userData.interests},
    ];

    function updateProfile(data) {
        setUserData((prevData) => ({
            ...prevData,
            profile: data,
        }));
    }

    function updateList(type, data) {
        setUserData((prevData) => ({
            ...prevData,
            [type]: prevData[type].map((item) =>
                item.id === data.id ? data : item
            ),
        }));
    }

    function addItem(type, data) {
        setUserData((prevData) => ({
            ...prevData,
            [type]: [...prevData[type], data],
        }));
    }

    function handledelete(type, data) {
        setUserData((prevData) => ({
            ...prevData,
            [type]: prevData[type].filter((item) => item.id !== data.id),
        }));
        handleEdit(null);
    }

    function handlesubmit(type, data) {
        console.log('handling');
        if (type === "profile") {
            updateProfile(data);
        } else if (item) {
            updateList(type, data);
        } else {
            addItem(type, data);
        }

        handleEdit(null);
    }

    function handleEdit(item) {
        setEditingItem(item);
    }

    return {
        item,
        userData,
        sections,
        handlesubmit,
        handleEdit,
        handledelete,
    };
}
