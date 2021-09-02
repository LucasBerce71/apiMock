import { formatCurrencyValue } from "./formatCureencyValue";

export function formatProductDetail(value: number) {
    const discount = (value / 10);

    return `10x de ${formatCurrencyValue(discount)}`;
}