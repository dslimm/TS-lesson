type PriceDetails = {
    price: number;
    discount: number;
    isInstallment: boolean;
    month: number;
};

const totalPrice = ({
    price,
    discount,
    isInstallment,
    month,
}: PriceDetails): number => {
    const discountedPrice = price - price * (discount / 100);

    if (isInstallment) {
        return discountedPrice / month;
    }

    return discountedPrice;
};

const finalPrice = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    month: 12,
});

console.log(finalPrice);