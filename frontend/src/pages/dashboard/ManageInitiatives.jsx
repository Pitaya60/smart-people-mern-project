import React from 'react';
import { useDeleteInitiativeMutation, useGetAllInitiativesQuery } from '../../redux/features/orders/initiativesApi';
import { Link, useNavigate } from 'react-router-dom';

const ManageInitiatives = () => {
    const navigate = useNavigate();
    const { data: initiatives, refetch } = useGetAllInitiativesQuery();
    const [deleteInitiative] = useDeleteInitiativeMutation();

    const handleDelete = async (id) => {
        try {
            await deleteInitiative(id).unwrap();
            alert('Initiative deleted successfully!');
            refetch();
        } catch (error) {
            console.error('Failed to delete initiative:', error.message);
            alert('Failed to delete initiative. Please try again.');
        }
    };

    const formatText = (text) => {
        return text.split('\n').map((para, i) => (
            <p key={i} className="mb-2">{para}</p>
        ));
    };

    return (
        <section className="py-1 bg-blueGray-50">
            <div className="w-full xl:w-11/12 px-4 mx-auto mt-24">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t px-4 py-3 border-0 flex justify-between items-center">
                        <h3 className="font-semibold text-base text-blueGray-700">Все инициативы</h3>
                        <button className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded transition-all">
                            Обновить
                        </button>
                    </div>

                    <div className="block w-full overflow-x-auto">
                        <table className="items-center bg-transparent w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-xs font-semibold text-left">#</th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left">Название</th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left">Категория</th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left">Автор</th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left">Описание</th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left">Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    initiatives && initiatives.map((init, index) => (
                                        <tr key={init._id}>
                                            <td className="px-6 py-4 text-sm">{index + 1}</td>
                                            <td className="px-6 py-4 text-sm">{init.title}</td>
                                            <td className="px-6 py-4 text-sm">{init.category}</td>
                                            <td className="px-6 py-4 text-sm">{init.author?.name || 'Неизвестен'}</td>
                                            <td className="px-6 py-4 text-sm max-w-sm">
                                                {formatText(init.description)}
                                            </td>
                                            <td className="px-6 py-4 text-sm space-x-2">
                                                <Link to={`/dashboard/edit-initiative/${init._id}`} className="text-indigo-600 hover:underline">
                                                    Редактировать
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(init._id)}
                                                    className="bg-red-500 text-white px-3 py-1 rounded-full"
                                                >
                                                    Удалить
                                                </button>
                                                <Link
                                                    to={`/messages/new?to=${init.author?._id}`}
                                                    className="bg-green-500 text-white px-3 py-1 rounded-full"
                                                >
                                                    Написать автору
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageInitiatives;
