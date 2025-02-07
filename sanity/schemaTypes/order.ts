import { title } from "process";

export default {
    name: 'order',
    type: 'document',
    title: 'order',
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string'
        },
        {
            name: 'companyName',
            title: 'Company Name (optional)',
            type: 'string'
        },
        {
            name: 'country',
            title: 'Country',
            type: 'string'
        },
        {
            name: 'streetAddress',
            title: 'Street Address',
            type: 'string'
        },
        {
            name: 'city',
            title: 'City',
            type: 'string'
        },
        {
            name: 'province',
            title: 'Province',
            type: 'string'
        },
        {
            name: 'zipCode',
            title: 'ZIP code',
            type: 'number'
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'number'
        },
        {
            name: 'emailAddress',
            title: 'Email address',
            type: 'string'
        },
        {
            name: 'additionalinfo',
            title: 'Additional information',
            type: 'string'
        },
        {
            name: 'cartItems',
            title: 'Cart Items',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'product' } }]
        },
        {
            name: 'total',
            title: 'Total',
            type: 'number'
        },
        {
            name: "orderDate",
            type: "datetime",
            title: "Order Date"
        },
        {
            name: "discount",
            type: "number",
            title: "Discount"
        },
        {
            name: 'status',
            title: 'Order Status',
            type: 'string',
            option: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Dispatched', value: 'dispatch' },
                    { title: 'Success', value: 'success' },
                ],
                layout: 'radio',
            },
            initialValue: 'pending',
        }
    ]
}